.experience__card {
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
}

.experience__thumbnail-wrapper {
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 16px;
  background: #ffffff;
  padding: 0.6rem;
}

.experience__thumbnail {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.experience__content {
  min-width: 0;
  flex: 1;
}

.experience__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.experience__role {
  margin: 0;
}

.experience__period {
  flex-shrink: 0;
  white-space: nowrap;
}

.experience__points {
  margin: 1rem 0 0;
  padding-left: 1.25rem;
}

.experience__points li {
  line-height: 1.7;
}

@media (max-width: 640px) {
  .experience__card {
    gap: 1rem;
  }

  .experience__thumbnail-wrapper {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    padding: 0.45rem;
  }

  .experience__header {
    flex-direction: column;
    gap: 0.35rem;
  }

  .experience__period {
    white-space: normal;
  }
}
